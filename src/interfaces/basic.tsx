


export interface basic {

  serverStats: {

    'cpu': number,

    'ram': number,

    'disk': number,

  },

  mongoDb: {

    collectionName: string,

    storageSize: number,

    unit: number,

  }[],

  application: {

    totalNumberOfChunks: number,

    createableChunks: number,

    squareMetersCurrent: number,

    squareMetersPotencial: number,

    creatingChunks: number,

    chunksToCreate: number,

  },

  dynamicObjects: any

}