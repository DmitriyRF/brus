require 'compass/import-once/activate'

#User config 

# Должен лежать в корневой папке !! ! !!
#После того как файл config.rb настроен и лежит в корневой папке вашего проекта, запустите командную строку и введите команду:
#compass init
#compass watch
# preferred_syntax – выбор синтаксис :sass или :scss . По-умолчанию, установлен :scss.
preferred_syntax = :sass 
#http_path – путь к проекту. Например, если для разработки вы используете папку dev/ , то необходимо в config.rb указать http_path = "dev/"
http_path = "brus/"
#css_dir – путь к файлам CSS. Путь указывается в зависимости от project_path. По-умолчанию, установлен "stylesheets" .
css_dir = "css"
#sass_dir – путь к файлам SASS. Путь указывается в зависимости от project_path. По-умолчанию, установлен "sass"
sass_dir = "css/sass"
#images_dir – путь к папке, в которой хранятся изображения. По-умолчанию "images".
#images_path – полный путь к изображениям. По-умолчанию <project_path>/<images_dir>.
images_dir = "img"
#javascripts_dir – путь к javascript файлам. По-умолчанию "javascripts".
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
#output_style = :compressed – скомпилированный CSS будет сжат. Также могут быть заданы значения :nested , :expanded , :compact.
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
