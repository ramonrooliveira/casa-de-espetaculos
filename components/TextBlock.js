import { Icon, InlineIcon } from '@iconify/react'
import bxlInstagram from '@iconify/icons-bx/bxl-instagram'

const TextBlock = ({ icon, iconSize, text, classes, title, auxImage }) => {
  
  return (
    <div className="text-block-wrapper">
      {auxImage ? <img src={`/${auxImage}`} className="logo-masks" /> : <></>}
      <div className={`text-block ${classes} `}>
        {title ? <h3 className="title">{title}</h3> : <> </>}
        { (icon && icon === 'instagram') ? <Icon icon={bxlInstagram} style={{ color: '#ffffff', fontSize: iconSize }} /> : ''}
        { text.length > 1 ? 
          [...text].map(t => <p>{t}</p>)
        : text }
      </div>
    </div>
  )
}

export default TextBlock
