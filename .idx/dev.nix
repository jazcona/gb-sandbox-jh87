{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.jdk21
    pkgs.nodejs_20
    pkgs.maven
  ];
  idx.extensions = [
    "angular.ng-template"
    "redhat.java"
    "vscjava.vscode-java-debug"
    "vscjava.vscode-java-dependency"
    "vscjava.vscode-java-pack"
    "vscjava.vscode-java-test"
    "vscjava.vscode-maven"
    "rangav.vscode-thunder-client"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "start"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
          "--disable-host-check"
        ];
        manager = "web";
      };
    };
  };
} 