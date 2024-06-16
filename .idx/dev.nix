# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{pkgs}: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.yarn
    pkgs.nodePackages.pnpm
    pkgs.bun
    pkgs.gh
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "vscodevim.vim"
      "bradlc.vscode-tailwindcss"
      "codezombiech.gitignore"
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "formulahendry.auto-rename-tag"
      "github.vscode-github-actions"
      "GitHub.vscode-pull-request-github"
      "golang.go"
      "KnisterPeter.vscode-github"
      "mhutchie.git-graph"
      "ms-azuretools.vscode-docker"
      "ms-python.debugpy"
      "ms-python.python"
      "ritwickdey.LiveServer"
      "rust-lang.rust-analyzer"
      "rvest.vs-code-prettier-eslint"
      "tombonnike.vscode-status-bar-format-toggle"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}