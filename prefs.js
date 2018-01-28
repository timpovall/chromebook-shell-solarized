base03 =     "#002b36";
base02 =     "#073642";
base01 =     "#586e75";
base00 =     "#657b83";
base0 =      "#839496";
base1 =      "#93a1a1";
base2 =      "#eee8d5";
base3 =      "#fdf6e3";
yellow =     "#b58900";
orange =     "#cb4b16";
red =        "#dc322f";
magenta =    "#d33682";
violet =     "#6c71c4";
blue =       "#268bd2";
cyan =       "#2aa198";
green =      "#859900";

function map_colors(rebase03,rebase02,rebase01,rebase00,rebase0,rebase1,rebase2,rebase3,
                    yellow,orange,red,magenta,violet,blue,cyan,green) {
  term_.prefs_.set('background-color', rebase03);
  term_.prefs_.set('foreground-color', rebase0);
  term_.prefs_.set('cursor-color', rebase0);
  term_.prefs_.set('color-palette-overrides',
        [ rebase02 , red     , green    , yellow,
        blue       , magenta , cyan     , base2,
        rebase03   , orange  , rebase01 , rebase00,
        rebase0    , violet  , rebase1  , rebase3 ]);
}

// solarized dark
// map_colors(base03,base02,base01,base00,base0,base1,base2,base3,yellow,orange,red,magenta,violet,blue,cyan,green);

// solarized light
// map_colors(base3,base2,base1,base0,base00,base01,base02,base03,yellow,orange,red,magenta,violet,blue,cyan,green);
