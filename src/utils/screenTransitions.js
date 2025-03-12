// Définition des types d'animations
import '../CSS/ScreenEffects.css';

const ANIMATIONS = {
  TURN_ON: {
    name: 'turn-on',
    duration: 1, // Animation d'allumage
    forwards: true  // Garde l'état final de l'animation
  },
  TURN_OFF: {
    name: 'turn-off',
    duration: 0.15, // Animation d'extinction standard
    forwards: true
  }
};

export function isSafari() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('safari') && !ua.includes('chrome');
}

function getRootContentElement() {
  return document.getElementById('root')?.firstChild || null;
}

function applyScreenAnimation(animationConfig) {
  const element = getRootContentElement();
  if (!element) return;

  // Réinitialisation de l'animation pour éviter les conflits
  element.style.animation = '';

  const browser = isSafari() ? '-safari' : '';
  const forwards = animationConfig.forwards ? 'forwards' : '';

  // Définir l'animation
  element.style.animation = `${animationConfig.name}${browser} ${animationConfig.duration}s linear ${forwards}`;

}

/**
 * Applique l'animation d'allumage d'écran
 */
export function turnScreenOn(forward = true) {
  const element = getRootContentElement();
  
  // Ajouter un écouteur pour détecter la fin de l'animation
  element.addEventListener('animationend', () => {
    // Ajouter la classe qui fait clignoter l'arrière-plan après la fin de l'animation
    element.classList.add('screen-on-complete');
  }, { once: true });
  
  applyScreenAnimation({...ANIMATIONS.TURN_ON, forwards: forward})
  ;}

/**
 * Applique l'animation d'extinction d'écran
 */
export function turnScreenOff() {
  const element = getRootContentElement();
  
  // Supprimer la classe screen-on-complete si elle existe
  element.classList.remove('screen-on-complete');
  
  applyScreenAnimation(ANIMATIONS.TURN_OFF);
}


function navigateWithTransition(navigate, route) {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const contentElement = rootElement.firstChild;
    if (contentElement) {
      contentElement.addEventListener('animationend', () => {
        navigate(route);
      }, { once: true }); // L'option once permet de supprimer l'écouteur après son exécution
    }
  }
}

export function handleRouteClick(navigate, route) {
  if (route) {
    turnScreenOff(); 
    navigateWithTransition(navigate, route);
  }
}
