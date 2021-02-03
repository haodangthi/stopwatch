import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {
    transform(sec: number): string {
        const hours = getHours(Math.floor(sec / 3600))
        const minutes = getMin(Math.floor(sec / 3600), sec)
        const seconds = getSeconds(sec % 60 )

        return `${hours}:${minutes}:${seconds}`
    }
}

function getHours(hours): number | string {
   return hours > 10 ?hours : `0${hours}`
}

function getMin(hours, seconds): number | string {
    if (hours > 0) {
        const minutes = Math.floor(seconds % 3600 / 60)
        return (minutes > 10) ? minutes : `0${minutes}`
            
    } else {
        return Math.floor(seconds / 60) > 10 ? Math.floor(seconds / 60) : `0${Math.floor(seconds / 60)}`
    }
}

function getSeconds(seconds): number | string {
    return seconds > 10 ? seconds : `0${seconds}`
}