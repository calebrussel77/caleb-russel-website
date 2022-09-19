import {ReactNode} from 'react';
import Popup from 'reactjs-popup';
import {PopupPosition} from 'reactjs-popup/dist/types';

type TooltipProps = {
  label: string;
  className?: string;
  position?: PopupPosition | PopupPosition[];
  children: ReactNode;
};

const TooltipLabel = ({label}: {label: string}) => {
  return (
    <div className="text-xs py-1 px-1.5 border border-gray-200 text-white rounded bg-slate-800 shadow-md">
      {label}
    </div>
  );
};

function Tooltip({
  label,
  position = 'bottom center',
  className,
  children,
}: TooltipProps) {
  return (
    <Popup
      arrow={false}
      on={['hover', 'focus']}
      trigger={() => <div className={className}>{children}</div>}
      position="bottom center"
      mouseEnterDelay={400}
      keepTooltipInside
      offsetY={8}
      closeOnDocumentClick
    >
      {label && <TooltipLabel label={label} />}
    </Popup>
  );
}

export {Tooltip};
