import { memo, useState, useEffect } from 'react';

interface CotacaoDolarDia {
    cotacaoCompra: number;
    cotacaoVenda: number;
    dataHoraCotacao: string;
}

interface UseFetchResult {
    data: CotacaoDolarDia[] | null;
    error: string | null;
}

const useFetch = (url: string): UseFetchResult => {
    const [data, setData] = useState<CotacaoDolarDia[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Erro de resposta da requisição');
                }
                const result = await res.json();
                if (Array.isArray(result.value)) {
                    setData(result.value);
                } else {
                    throw new Error('Erro ao processar dados da requisição');
                }
            } catch (error: any) {
                setError(error.message);
            }
        };

        const timeoutId = setTimeout(fetchData, 3000);

        return () => clearTimeout(timeoutId);
    }, [url]);

    return { data, error };
};

const ConversorDParaR = memo(() => {
    const [dollarAmount, setDollarAmount] = useState<number>(0);
    const [realAmount, setRealAmount] = useState<number | null>(null);

    const date = new Date();
    date.setDate(date.getDate() - 3);
    const dataCotacao = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${date.getFullYear()}`; // Format date as MM-DD-YYYY
    const { data, error } = useFetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${dataCotacao}%27&$top=100&$format=json`);

    const handleConvert = () => {
        if (data && data.length > 0) {
            const cotacaoCompra = data[0].cotacaoCompra;
            setRealAmount(dollarAmount * cotacaoCompra);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (value >= 0) {
            setDollarAmount(value);
        }
    };

    return (
        <div className='container'>
            {error && <p>Error: {error}</p>}
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}

            <h1>Conversor de Dólar para Real</h1>
            <p>Insira o valor em dólar para converter para real:</p>
            <input 
                type="number" 
                value={dollarAmount} 
                onChange={handleInputChange} 
            />
            <button onClick={handleConvert}>Converter</button>
            {realAmount !== null && <p className='result'>Valor em Real: {realAmount.toFixed(2)}</p>}
        </div>
    );
});

export default ConversorDParaR;
