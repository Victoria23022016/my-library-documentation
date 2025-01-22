import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaigaDocRoute } from '../../app/taigaDoc-routes';
import { CommonModule } from '@angular/common';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';

@Component({
  standalone: true,
  selector: 'logo',
  imports: [RouterLink, CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  taigaDocRoute = TaigaDocRoute;
}

export const LOGO_CONTENT = new PolymorpheusComponent(LogoComponent);
