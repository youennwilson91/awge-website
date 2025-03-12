import React, { useEffect, useRef, useState } from 'react';
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import { useNavigate } from 'react-router-dom';
import '../CSS/ScreenEffects.css';
import '../CSS/VideoPlayer.css';

export default function VideoPlayer({ src }) {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        // Petit délai pour s'assurer que le DOM est prêt
        const timeout = setTimeout(() => turnScreenOn(false), 2);
        return () => clearTimeout(timeout);
    }, []);

    // Gestionnaires d'événements pour les contrôles personnalisés
    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const handleSeek = (e) => {
        const seekTime = parseFloat(e.target.value);
        setCurrentTime(seekTime);
        if (videoRef.current) {
            videoRef.current.currentTime = seekTime;
        }
    };

    // Formatage du temps
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="video-player-container">
            <img 
              src="/buttons/return-button.gif" 
              alt="return" 
              className='return-button-forum' 
              onClick={() => handleRouteClick(navigate, '/dvd')}
            />
            
            <div className="video-player">
                {src ? (
                    <>
                        <video 
                            ref={videoRef}
                            width="auto" 
                            height="auto"
                            src={src}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            controls={false}
                        >
                            Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                        
                        <div className="custom-controls">
                            <button 
                                className="play-pause-btn" 
                                onClick={handlePlayPause}
                            >
                                {isPlaying ? '❚❚' : '▶'}
                            </button>
                            
                            <div className="time-controls">
                                <span className="current-time">{formatTime(currentTime)}</span>
                                <input 
                                    type="range" 
                                    className="progress-bar"
                                    min="0"
                                    max={duration}
                                    value={currentTime}
                                    onChange={handleSeek}
                                />
                                <span className="duration">{formatTime(duration)}</span>
                            </div>
                            
                            <div className="volume-controls">
                                <span className="volume-icon">🔊</span>
                                <input 
                                    type="range" 
                                    className="volume-slider"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="placeholder">
                        <p>Vidéo non disponible</p>
                    </div>
                )}
            </div>
        </div>
    );
}