import './fontello.css';
import Body from '@/static-components/Body';



export default async function Page () {

  return (
    <body dangerouslySetInnerHTML={{__html: await new Body().render() }} />
  )
}
