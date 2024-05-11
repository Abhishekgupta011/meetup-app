import Link from 'next/link';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { dummy_meetups } from '@/pages';
import { useRouter } from 'next/router';
import Image from 'next/image';

function MeetupItem(props) {
   
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
        <Image src={props.image} alt={props.title} width={300} height={400} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/${props.id}`}><button>Show Details</button></Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
