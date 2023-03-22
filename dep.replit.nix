{ pkgs }: {
  deps = [
    pkgs.zip
    pkgs.nodejs
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
    pkgs.nodejs
  ];
}
