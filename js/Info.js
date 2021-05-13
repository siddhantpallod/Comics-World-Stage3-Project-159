AFRAME.registerComponent('info-banner', {
    schema: {
        itemId: {default: '', type: 'string'}
    },

    update: function(){
        this.createBanner();
    },

    createBanner: function(){
        postersInfo = {
            'superman': {
                bannerUrl : '../assets/superman-banner.jpg',
                title: 'Superman',
                releasedYear = '1983',
                description = 'Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939.'
            },
            'spiderman': {
                bannerUrl: '../assets/spiderman-banner.png',
                title: 'Spiderman',
                releasedYear: '1962',
                description: 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.'
            },
            'captain-aero': {
                bannerUrl: '../assets/captain-aero-banner.jpg',
                title: 'Captain Aero',
                releasedYear: '1942',
                description: 'Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Issue was published in December 1941, and it ran through issue (August 1946).'
            },
            'outer-space': {
                bannerUrl: '../assets/outer-space-banner.jpg',
                title: 'Outer Space',
                releasedYear: '1952',
                description: 'This is the most vital subject of our times! Every American Man... and Woman... Child... owes it to his country and himself, to read this issue!!'
            }
        }

        const {itemId} = this.data

        const fadeBackground = document.querySelector('#fadeBackground')

        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('id', `${itemId}-banner`)
        entity.setAttribute('geometry', {
            primitive: plane,
            width: 0.9,
            height: 1
        })
        entity.setAttribute('material', {color: 'white'})
        entity.setAttribute('position', {x: 0, y:0, z: -1})

        const item = postersInfo[itemId]

        const image = this.createImage(item)
        const title = this.createTitle(item)
        const description = this.createDescription(item)

        entity.appendChild(image)
        entity.appendChild(title)
        entity.appendChild(description)

        fadeBackground.appendChild(entity)
    },

    createImage: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('geometry', {
            primitive: 'plane',
            width: 0.8,
            height: 0.5
        })
        entity.setAttribute('material', {src: item.bannerUrl})
        entity.setAttribute('position', {x:0, y:0, z: 0.05})
        return entity
    },

    createTitle: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('text', {
            font: 'exo2bold',
            width: 1,
            height: 2,
            color: 'white',
            value: `${item.title} (${item.releasedYear})`
        })
        entity.setAttribute('position', {x:-0.5, y:0.02, z:0.05})
        return entity
    },

    createDescription: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('text', {
            font: 'exo2semibold',
            width: 0.75,
            height: 2,
            color: 'white',
            value: item.description
        })
        entity.setAttribute('position', {x:-0.4, y:-0.25, z:0.05})
        return entity
    }
})