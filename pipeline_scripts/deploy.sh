#! /bin/sh

set -uex

aws eks update-kubeconfig --name sre_course --region eu-central-1
helm upgrade -i phonebook-ui phonebook_ui --set imageTag=$GITHUB_SHA
