import React from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {

  // Estado para armazenar os dados buscados (do tipo T), estado de carregamento e estado de erro
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Cria uma referência para armazenar as opções para que persistam entre renders
  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  // Efeito para realizar a busca de dados
  React.useEffect(() => {
    // Cria um AbortController para permitir a interrupção da operação de busca
    const controller = new AbortController();
    const { signal } = controller;

    // Função assíncrona para buscar os dados
    const fetchData = async () => {
      // Define o estado de carregamento como true e reinicia os dados
      setLoading(true);
      setData(null);
      try {
        // Realiza a busca usando a URL fornecida e as opções (da ref)
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        // Se a resposta não estiver ok, lança um erro
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        // Analisa a resposta como JSON e a converte para o tipo especificado T
        const json = (await response.json()) as T;
        // Se o sinal não estiver interrompido, atualiza os dados
        if (!signal.aborted) setData(json);
      } catch (error) {
        // Se o sinal não estiver interrompido e o erro for uma instância de Error, define o estado de erro
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        // Se o sinal não estiver interrompido, define o estado de carregamento como false
        if (!signal.aborted) setLoading(false);
      }
    };
    fetchData();
    
    // Função de limpeza para interromper a operação de busca quando o componente for desmontado ou a URL mudar
    return () => {
      controller.abort();
    };
  }, [url]); // A array de dependências garante que o efeito seja executado quando a URL mudar
  
  // Retorna os dados, o estado de carregamento e o estado de erro
  return { data, loading, error };
}

export default useFetch;
