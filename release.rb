#!/usr/bin/env ruby

manifest = 'manifest.json'

content = IO.read(manifest)
version = content.match(/"version": "(\d+\.\d+\.\d+)"/)[1]

new_ver = version.next
content.sub!(/"version": ".*?"/, "\"version\": \"#{new_ver}\"")
File.open(manifest, 'w') { |f| f.puts content }

`git commit -a -m "version bump"`
`git push`
`gh release create #{new_ver} --generate-notes manifest.json main.ts`
`git pull`

