def format_name(f_name, l_name):
    '''Take a first and last name and format it
     to return the title case version of the name'''      #This is a doc
    formated_f_name = f_name.title()
    formated_l_name = l_name.title()
    return f"{formated_f_name} {formated_l_name}" 




formatted_string = format_name("lAVan", "bradLEY")


print(formatted_string)