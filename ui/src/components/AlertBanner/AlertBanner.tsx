import React from "react";
import { Alert } from "react-bootstrap";

export enum AlertVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
  LIGHT = "light",
  DARK = "dark",
}

interface AlertBannerProps {
  message?: string;
  variant?: AlertVariant;
}

function AlertBanner({ message, variant }: AlertBannerProps) {
  const alertMessage =
    message ?? "An unexpected error occurred. Please try again later.";
  const alertVariant = variant ?? AlertVariant.DANGER;

  return <Alert variant={alertVariant}>{alertMessage}</Alert>;
}

export default AlertBanner;
