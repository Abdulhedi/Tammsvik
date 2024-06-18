import SadIcon from '../icons/sad.svg'
import HappyIcon from '../icons/happy.svg'
import ShameIcon from '../icons/shame.svg'
import AngryIcon from '../icons/angry.svg'
import ScaredIcon from '../icons/scared.svg'

enum Color {
  Red = 65535,
  Blue = 43690,
  Green = 21845,
  Yellow = 10922,
  Purple = 54612,
}

export const Emotions = [
  {
    emotion: 'sad',
    color: Color.Blue,
    icon: SadIcon,
  },
  {
    emotion: 'shame',
    color: Color.Yellow,
    icon: ShameIcon,
  },
  {
    emotion: 'angry',
    color: Color.Red,
    icon: AngryIcon,
  },
  {
    emotion: 'scared',
    color: Color.Purple,
    icon: ScaredIcon,
  },
  {
    emotion: 'happy',
    color: Color.Green,
    icon: HappyIcon,
  },
];
