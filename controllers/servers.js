let servers = [
    { id: '1', name: 'EEE', status: 'pending' },
    { id: '2', name: 'AAA', status: 'working' },
    { id: '3', name: 'DDD', status: 'pending' },
    { id: '4', name: 'VVV', status: 'working' },
];

export const getAll = (req, res) => {
    res.status(200).json(servers);
};

export const create = (req, res) => {
    console.log('req.body: ', req.body);
    const newServer = {
        id: Date.now().toString(),
        ...req.body,
    };
    servers.push(newServer);
    res.status(201).json(newServer);
};

export const remove = (req, res) => {
    console.log('req.params.id: ', req.params.id);
    servers = servers.filter((s) => s.id !== req.params.id);
    res.json({message: 'Server has been removed'});
};
