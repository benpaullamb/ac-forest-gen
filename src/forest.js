
export default function createForest(size, options) {
    options = {
        gridPadding: 1,
        minXSpacing: 3,
        minYSpacing: 4,
        maxTries: 1000,
        ...options
    };

    const trees = [];

    let tries = 0;

    while (tries < options.maxTries) {
        tries++;

        const randX = Math.floor(Math.random() * (size - (options.gridPadding * 2))) + options.gridPadding;
        const randY = Math.floor(Math.random() * (size - (options.gridPadding * 2))) + options.gridPadding;
        const tree = {
            x: randX,
            y: randY
        };

        const discard = trees.some(plantedTree => {

            const xDiff = Math.abs(plantedTree.x - tree.x);
            const yDiff = Math.abs(plantedTree.y - tree.y);

            if (xDiff < options.minXSpacing && yDiff < options.minYSpacing) return true;
            return false;
        });

        if (discard) continue;

        trees.push(tree);
    }

    return trees;
}