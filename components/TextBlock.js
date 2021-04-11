import { Icon, InlineIcon } from '@iconify/react';
import bxlInstagram from '@iconify/icons-bx/bxl-instagram';

const TextBlock = ({ icon, text, classes, title }) => {
  return (
    <div className="text-block-wrapper">
      <div className={`text-block ${classes} `}>
        {title ? <h3 className="title">{title}</h3> : <> </>}
        { (icon && icon == 'instagram') ? <Icon icon={bxlInstagram} style={{color: '#ffffff', fontSize: '64px'}} /> : ''}
        { text }
      </div>
    </div>
  )
}

export default TextBlock
