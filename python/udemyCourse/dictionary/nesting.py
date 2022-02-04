#Nesting

capitals = {
    "France": "Paris",
    "Germany": "Berlin"
}



#Nesting a list in a dictionary

travel_log = {
    "France":["Paris", "Lille", "Dijon"],
    "Germany": ["Berlin", "Hamburg", "Stuttgart"]
}


#Nest a dictionary in a dictionary

travel_log2 = {
    "France": {"Cities_visited": ["Paris", "Lille", "Dijon"], "total_visits": 12},
    "Germany": {"Berlin", "Hamburg", "Stuttgart"}
}


#Nesting Dictionary in a list

travel = [
    {
      "country": "France",
      "cities_visited": ["Paris", "Lille", "Dijon"],
      "total_visits": 12
    },
    {
      "country": "Germany",
      "cities_visited": ["Berlin", "Hamburg", "Stuttgart"],
      "total_visits": 5}
    ]


print(travel[1])