import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import React from 'react';

interface StarInputProps {
  onClickRating: (value: number) => void;
  value: number;
  isHalf: boolean;
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label<{ isHalf: boolean }>`
  cursor: pointer;
  font-size: 24px;
  color: #f1f2f4;

  ${({ isHalf }) =>
    isHalf &&
    css`
      position: absolute;
      width: 12px;
      overflow: hidden;

      &:nth-of-type(10) {
        transform: translate(-108px);
      }
      &:nth-of-type(8) {
        transform: translate(-84px);
      }
      &:nth-of-type(6) {
        transform: translate(-60px);
      }
      &:nth-of-type(4) {
        transform: translate(-36px);
      }
      &:nth-of-type(2) {
        transform: translate(-12px);
      }
    `}
`;

export default function StarInput({
  onClickRating,
  value,
  isHalf,
}: StarInputProps) {
  const handleClickRatingInput = () => {
    onClickRating(value);
  };

  return (
    <>
      <Input type="radio" name="rating" id={`star${value}`} value={value} />
      <Label
        onClick={() => handleClickRatingInput()}
        isHalf={isHalf}
        htmlFor={`star${value}`}
      >
        {isHalf ? <FaStarHalf /> : <FaStar />}
      </Label>
    </>
  );
}
