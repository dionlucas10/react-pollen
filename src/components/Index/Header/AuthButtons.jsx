import './AuthButtons.css';

export function AuthButtons({ className, onButtonClick }) {
  return (
    <div className={className}>
      <button type="button" onClick={onButtonClick}>Login</button>
    </div>
  );
}