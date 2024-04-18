#!/usr/bin/env ruby

manifest = 'manifest.json'

content = IO.read(manifest)
version = content.match(/"version": "(\d+\.\d+\.\d+)"/)[1]

new_ver = version.next
content.sub!(/"version": ".*?"/, "\"version\": \"#{new_ver}\"")
File.open(manifest, 'w') { |f| f.puts content }

`git release create -m "v#{new_ver}" #{new_ver}`
`gh release upload #{new_ver} main.ts manifest.json`
