import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../../shared/services/country';
import { Footer } from '../../../shared/components/footer/footer';
import { CountryList } from '../../components/country-list/country-list';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-by-region-page',
  imports: [Footer, CountryList, FormsModule, HttpClientModule],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage {
    countries: any[] = [];

  constructor(private countryService: CountryService) {}

  onSearch(region: string) {
    console.log('🌎 Buscando región:', region);

    this.countryService.searchByRegion(region).subscribe({
      next: (data) => {
        console.log('✅ Respuesta de la API:', data);
        this.countries = data;
      },
      error: (error) => {
        console.error('❌ Error al obtener países:', error);
        this.countries = [];
      },
      complete: () => console.log('✅ Búsqueda completada'),
    });
  }


}
