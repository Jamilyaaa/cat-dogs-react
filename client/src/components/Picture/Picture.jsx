// import style from './picture.module.css';

export default function Picture({url}) {

  return (
  <>
<center>
  {url ? <img src={url} /> : <button class="btn btn-success my-3" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Загрузка...
</button> }
</center>
  </>
  )
}

