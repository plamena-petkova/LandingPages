import style from "../RedButton/RedButton.module.css"

interface RedButtonProps {
    captions: string;
  }

function RedButton({captions}:RedButtonProps) {
    return(
        <button className={style.redButton}>{captions}</button>
    )
}

export default RedButton;