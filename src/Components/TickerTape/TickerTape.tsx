import React, { useState, useEffect } from "react";
import { TickerWrapper, CloseButton, Link } from "./TickerTapeStyling";
import { Links } from "../../Utils/ExternalLinks";

export interface TickerProps {
  tickerText: string;
}

export const TickerTape = ({ tickerText }: TickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tickerTimer = 5000;

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let timer1 = setTimeout(() => setIsOpen(true), tickerTimer);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <TickerWrapper>
          <div />
          <Link href={Links.patreon} target="_blank">
            {tickerText}
          </Link>
          <CloseButton onClick={handleClose}>X</CloseButton>
        </TickerWrapper>
      )}
    </>
  );
};
