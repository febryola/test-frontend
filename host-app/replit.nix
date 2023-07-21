{ pkgs }: {
  environment.systemPackages = with pkgs; [
    nodejs
    npm
    # Add any additional Nix packages you need for your project
  ];
}
