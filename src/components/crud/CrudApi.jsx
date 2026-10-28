//Este use escucha el arreglo vacio por cada cambio
    useEffect(()=>{
        fetch("http://localhost:5170/equipos")
        .then((response) => response.json())
        .then((data) =>{
            setEquipos(data);
        })
