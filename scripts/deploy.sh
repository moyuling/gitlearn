#!/bin/sh -x

ssh -tt app@199.195.248.151 <<'ENDSSH'
  set -x
  echo `expr 10 + 20`
  set +x
  exit
ENDSSH
