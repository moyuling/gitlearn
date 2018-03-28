#!/bin/sh -x

ssh -tt app@199.195.248.151 <<'ENDSSH'
  set -x
  rm -rf /usr/share/nginx/html/**
  set +x
  exit
ENDSSH
