export const items = [
    {
        tag: 'Tendencia',
        title: 'Tendencia de la infección por Covid-19 en un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Predicción',
        title: 'Predicción de infectados en un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' },
            { key: 'Dias', value: '' }
        ]
    },
    {
        tag: 'Índice',
        title: 'Indice de progresión de la pandemia',
        field: [
            { require: 'Confirmados', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: []
    },
    {
        tag: 'Predicción',
        title: 'Predicción de mortalidad por COVID en un Departamento',
        field: [
            { require: 'Departamento', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' },
            { key: 'Departamento', value: '' },
            { key: 'Dias', value: '' }
        ]
    },
    {
        tag: 'Predicción',
        title: 'Predicción de mortalidad por COVID en un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' },
            { key: 'Dias', value: '' }
        ]
    },
    {
        tag: 'Análisis',
        title: 'Análisis del número de muertes por coronavirus en un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Tendencia',
        title: 'Tendencia del número de infectados por día de un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Predicción',
        title: 'Predicción de casos de un país para un año',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' },
            { key: 'Año', value: '' }
        ]
    },
    {
        tag: 'Tendencia',
        title: 'Tendencia de la vacunación de un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Vacunación', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Análisis',
        title: 'Ánalisis Comparativo de Vacunación entre 2 paises',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Vacunación', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais 1', value: '' },
            { key: 'Pais 2', value: '' }
        ]
    },
    {
        tag: 'Porcentaje',
        title: 'Porcentaje de hombres infectados por covid-19 en un País desde el primer caso activo',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Género', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Análisis',
        title: 'Ánalisis Comparativo entres 2 o más paises o continentes',
        field: [
            { require: 'Comparar_1', match: '' },
            { require: 'Comparar_2', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais 1', value: '' },
            { key: 'Pais 2', value: '' },
            { key: 'Continente 1', value: '' },
            { key: 'Continente 2', value: '' },
        ]
    },
    {
        tag: 'Muertes promedio',
        title: 'Muertes promedio por casos confirmados y edad de covid 19 en un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Edad', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Muertes según región',
        title: 'Muertes según regiones de un país - Covid 19',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Region', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Tendencia',
        title: 'Tendencia de casos confirmados de Coronavirus en un departamento de un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Departamento', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' },
            { key: 'Departamento', value: '' }
        ]
    },
    {
        tag: 'Porcentaje',
        title: 'Porcentaje de muertes frente al total de casos en un país, región o continente',
        field: [
            { require: 'Continente', match: '' },
            { require: 'Región', match: '' },
            { require: 'Pais', match: '' },
            { require: 'Total', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' },
            { key: 'Región', value: '' },
            { key: 'Continente', value: '' },
            { key: 'Dias', value: '' }
        ]
    },
    {
        tag: 'Tasa de comportamiento',
        title: 'Tasa de comportamiento de casos activos en relación al número de muertes en un continente',
        field: [
            { require: 'Continente', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Continente', value: '' }
        ]
    },
    {
        tag: 'Comportamiento',
        title: 'Comportamiento y clasificación de personas infectadas por COVID-19 por municipio en un País',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Municipio', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Predicción',
        title: 'Predicción de muertes en el último día del primer año de infecciones en un país',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Tasa de crecimiento',
        title: 'Tasa de crecimiento de casos de COVID-19 en relación con nuevos casos diarios y tasa de muerte por  COVID-19',
        field: [
            { require: 'Confirmados', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: []
    },
    {
        tag: 'Predicción',
        title: 'Predicciones de casos y muertes en todo el mundo - Neural Network MLPRegressor',
        field: [
            { require: 'Confirmados', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Dias', match: '' }
        ]
    },
    {
        tag: 'Tasa de mortalidad',
        title: 'Tasa de mortalidad por coronavirus (COVID-19) en un país',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Factor de muerte',
        title: 'Factores de muerte por COVID-19 en un país',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Muertes', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Comparación',
        title: 'Comparación entre el número de casos detectados y el número de pruebas de un país',
        field: [
            { require: 'Pais', match: '' },
            { require: 'Confirmados', match: '' },
            { require: 'Pruebas', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Pais', value: '' }
        ]
    },
    {
        tag: 'Predicción',
        title: 'Predicción de casos confirmados por día',
        field: [
            { require: 'Confirmados', match: '' },
            { require: 'Fecha', match: '' }
        ],
        filter: [
            { key: 'Dias', value: '' }
        ]
    }
];
