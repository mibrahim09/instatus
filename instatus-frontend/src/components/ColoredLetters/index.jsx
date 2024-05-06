import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';

export const ColoredLetters = ({name}) => {
    return (<InitialsAvatar className={"initials-avatar avatar"} name={name?.toString().toUpperCase()}/>)
}