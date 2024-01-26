import './fontello.css';
import Body from '@/static-components/Body';

export default function Page () {
  return (
      <body dangerouslySetInnerHTML={{__html: new Body().render()}} />
  )
}
