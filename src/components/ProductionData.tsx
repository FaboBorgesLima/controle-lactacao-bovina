interface ProductionDataProps {
    minDate:Date,
    maxDate:Date,
    numLotes:number,
    volumeTotal:number,
    totalNumVacas:number,
}

export class ProductionData {

    perVaca:number = 0;

    perDay:number = 0;

    total:number = 0;

    isOkay:boolean = false;

    constructor(props:ProductionDataProps){
     
        let days:number = ( ( props.maxDate.getTime() - props.minDate.getTime() ) / ( 1000 * 60 * 60 * 24 ) ) +1 ;

        if ( Math.trunc( days ) <= 0 ) {

            days = 1;

        }
        
        const VACAS:number = props.totalNumVacas / props.numLotes;

        this.perDay = Number( ( props.volumeTotal / days ).toFixed(2) );

        this.perVaca = this.perDay / VACAS;

        this.isOkay = ! ( this.perVaca < 14 ) ;

        this.total = props.volumeTotal;
    }
}