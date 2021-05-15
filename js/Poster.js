AFRAME.registerComponent('posters', {
    init: function(){
        this.postersContainer = this.el
        this.posters()
    },

    posters: function(){
        const posterRef = [
            {
                id: 'superman',
                url: '../assets/superman-poster.jpg'
            },
            {
                id: 'spiderman',
                url: '../assets/spiderman-poster.jpg'
            },
            {
                id: 'caption-aero',
                url: '../assets/captain-aero-poster.jpg'
            },
            {
                id: 'outer-space',
                url: '../assets/outer-space-poster.jpg'
            }
        ]

        let previousXPosition = -100;

        for(var item of posterRef){
            const posX = previousXPosition + 40
            const posY = 17
            const posZ = -40
            const position = {x: posX, y: posY, z: posZ}
            previousXPosition = posX

            const border = this.createBorder(position, item.id)
            const poster = this.createPoster(item)
            border.appendChild(poster)  
            this.postersContainer.appendChild(border)
        }
    },

    createBorder: function(position, id){
        const entity = document.createElement('a-entity')
        entity.setAttribute('id', id)
        entity.setAttribute('visible', true)
        entity.setAttribute('geometry', {
            primitive: 'plane',
            width: 25,
            height: 32
        })
        entity.setAttribute('position', position)
        entity.setAttribute('material', {
            color: 'white', 
            opacity: 1
        })

        entity.setAttribute('cursor-listener', {})

        return entity
    },

    createPoster: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('geometry', {
            primitive: 'box',
            width: 22,
            height: 30
        })
        entity.setAttribute('position', {x: 0, y:0, z:0})
        entity.setAttribute('material', {src: item.url})

        return entity
    }
})