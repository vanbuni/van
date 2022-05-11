

mu = ['6ce4bae0f910632fae3284a1a5034a1c']
MUXXX = [
"6ce4bae0f910632fae3284a1a5034a1c",
"6ce4bae0f910632fae3284a1a5034a1c",
"6ce4bae0f910632fae3284a1a5034a1c"
]
count = 0
for item in MUXXX:
    if item not in mu:
        mu.append(item)
        count += 1
        
for item in mu:
    print(item)
print(len(mu))




