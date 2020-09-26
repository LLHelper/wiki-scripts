const baseURL = 'https://llhelper.github.io/wiki-scripts/dist';

interface LoadScriptOptions {
  async?: boolean;
  defer?: boolean;
  crossOrigin?: string | null;
}

export function loadScript(name: string, opt: LoadScriptOptions = {}) {
  const defaultOptions: Required<LoadScriptOptions> = {
    async: false,
    defer: false,
    crossOrigin: null,
  };
  const { async, defer, crossOrigin } = {
    ...defaultOptions,
    ...opt,
  };
  const url = `${baseURL}/${name}.js`;
  const script = document.createElement('script');
  script.src = url;
  script.async = async;
  script.defer = defer;
  script.crossOrigin = crossOrigin;
  document.body.appendChild(script);
}
