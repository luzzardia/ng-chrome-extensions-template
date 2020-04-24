#!/usr/bin/env bash

set -eo pipefail

declare -a simple_filenames=("runtime" "polyfills" "styles" "vendor" "main")
output_path="./"$(jq -r ".projects.\"chrome-extension-template\".architect.build.options.outputPath" angular.json)
#ext_files=( "${output_path}/manifest.json", "${output_path}/background.js", "${output_path}/extension.start.js")
manifest="${output_path}/manifest.json"
background="${output_path}/assets/js/background.js"

for s_file in ${simple_filenames[@]}; do

  if [[ ${s_file} == 'vendor' ]]; then
    sed -i "s/\"${s_file}.js\",//" ${manifest}
    sed -i "s/\"${s_file}.js.map\",//" ${manifest}
    sed -i "s/\"${s_file}.js\",//"  ${background}
  fi

  for file in ${output_path}/*; do
    file=$(basename ${file})
    if [[ ${file} =~ ${s_file}\.?(.*).(js|css)$  ]]; then
      echo ${file} " - " ${s_file}
      sed -i "s/${s_file}.js/${file}/" ${manifest}
      sed -i "s/${s_file}.js.map/${file}/" ${manifest}
      sed -i "s/${s_file}.js/${file}/" ${background}
    fi
  done

done
#    if [[ ${file} =~ (main|styles|scripts|vendor).*.(map|js|css) ]]; then
#      filename=$(basename ${file})
  #    set -i "s/${filename}/${}"
#    fi
