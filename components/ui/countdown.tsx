"use client";

import * as React from "react";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  /* targetDate -> MM-DD-YYYY */
  targetDate: string;
}

const Countdown = React.forwardRef<HTMLDivElement, CountdownProps>(({ targetDate, className, ...props }, ref) => {
  const parsedTargetDate = dayjs(targetDate, 'DD-MM-YYYY HH:mm:ss').add(20, "hours");

  const calculateTimeLeft = () => {
    const now = dayjs();
    const difference = parsedTargetDate.diff(now);
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div ref={ref} className={cn("w-80 h-[200px] flex-col justify-start items-center gap-6 inline-flex", className)} {...props}>
      <div className="text-center text-[#340717] text-[22px] font-normal leading-7" style={{ fontFamily: 'var(--orelega-one)' }}>Registration Closes In</div>
      <div className="flex-col justify-start items-center gap-3 flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-[88px] h-28 bg-[#ffe497] rounded shadow-[3px_3px_3px_0px_rgba(52,7,23,1.00)] border-2 border-[#ccb679] flex-col justify-center items-center gap-1 inline-flex">
            <div className="text-center text-[#340717] text-[32px] font-bold leading-10" style={{ fontFamily: 'var(--poppins)' }}>{timeLeft.days || '0'}</div>
            <div className="text-center text-[#340717] text-base font-normal leading-normal tracking-tight" style={{ fontFamily: 'var(--orelega-one)' }}>Days</div>
          </div>
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="w-2 h-2 bg-[#ccb679] rounded-full" />
            <div className="w-2 h-2 bg-[#ccb679] rounded-full" />
          </div>
          <div className="w-[88px] h-28 bg-[#ffe497] rounded shadow-[3px_3px_3px_0px_rgba(52,7,23,1.00)] border-2 border-[#ccb679] flex-col justify-center items-center gap-1 inline-flex">
            <div className="text-center text-[#340717] text-[32px] font-bold leading-10" style={{ fontFamily: 'var(--poppins)' }}>{timeLeft.hours || '0'}</div>
            <div className="text-center text-[#340717] text-base font-normal leading-normal tracking-tight" style={{ fontFamily: 'var(--orelega-one)' }}>Hours</div>
          </div>
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="w-2 h-2 bg-[#ccb679] rounded-full" />
            <div className="w-2 h-2 bg-[#ccb679] rounded-full" />
          </div>
          <div className="w-[88px] h-28 bg-[#ffe497] rounded shadow-[3px_3px_3px_0px_rgba(52,7,23,1.00)] border-2 border-[#ccb679] flex-col justify-center items-center gap-1 inline-flex">
            <div className="text-center text-[#340717] text-[32px] font-bold leading-10" style={{ fontFamily: 'var(--poppins)' }}>{timeLeft.minutes || '0'}</div>
            <div className="text-center text-[#340717] text-base font-normal leading-normal tracking-tight" style={{ fontFamily: 'var(--orelega-one)' }}>Mins</div>
          </div>
        </div>
        <div className="text-center text-[#340717] text-base font-normal tracking-tight" style={{ fontFamily: 'var(--poppins)' }}>{parsedTargetDate.format('D MMMM YYYY, HH:mm [WIB]')}</div>
      </div>
    </div>
  );
});

Countdown.displayName = 'Countdown';

export { Countdown };