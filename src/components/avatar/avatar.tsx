/* eslint-disable @typescript-eslint/restrict-template-expressions */
import clsx from 'clsx';
import Image from 'next/image';

import {Tooltip} from '@components/tooltip/tooltip';

import {blurDataURL, getNameInitials, stringToHslColor} from '@utils/misc';

type AvatarInitialsProps = {
  name: string;
  className?: string;
  textSize?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  enableTooltip?: boolean;
};
type AvatarProps = {
  src: string;
  className?: string;
  name: string;
  enableTooltip?: boolean;
  textSize?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  isPublic?: boolean;
};

const text_styles = {
  'extra-small': 'text-xs',
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
  'extra-large': 'text-xl',
};

const AvatarInitial: React.FC<AvatarInitialsProps> = ({
  name,
  className,
  textSize = 'medium',
  enableTooltip = false,
}) => {
  return enableTooltip ? (
    <Tooltip label={name}>
      <div
        style={{backgroundColor: stringToHslColor(name, 30, 60)}}
        className={clsx(
          `flex items-center justify-center overflow-hidden border ring-2 ring-white`,
          className
        )}
      >
        <span
          className={clsx(
            'text-center font-semibold uppercase text-white',
            text_styles[textSize]
          )}
        >
          {getNameInitials(name)}
        </span>
      </div>
    </Tooltip>
  ) : (
    <div
      style={{backgroundColor: stringToHslColor(name, 30, 60)}}
      className={clsx(
        `flex items-center justify-center overflow-hidden border ring-2 ring-white`,
        className
      )}
    >
      <span
        className={clsx(
          'text-center font-semibold uppercase text-white',
          text_styles[textSize]
        )}
      >
        {getNameInitials(name)}
      </span>
    </div>
  );
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  isPublic = false,
  enableTooltip = false,
  className,
  textSize = 'medium',
}) => {
  return src ? (
    enableTooltip ? (
      <Tooltip label={name}>
        <Image
          src={
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            isPublic ? src : `${process.env.NEXT_BASE_API_URL}/${src}`
          }
          alt={name || ''}
          placeholder="blur"
          layout="fill"
          blurDataURL={blurDataURL()}
          className={clsx(className, 'object-cover')}
        />
      </Tooltip>
    ) : (
      <Image
        src={
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          isPublic ? src : `${process.env.NEXT_BASE_API_URL}/${src}`
        }
        alt={name || ''}
        placeholder="blur"
        layout="fill"
        blurDataURL={blurDataURL()}
        className={clsx(className, 'object-cover')}
      />
    )
  ) : (
    <AvatarInitial {...{enableTooltip, textSize, name, className}} />
  );
};

export {Avatar, AvatarInitial};
