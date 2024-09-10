import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from 'app/shared/date';
import { IProject } from '../project.model';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  selector: 'jhi-project-detail',
  templateUrl: './project-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe, MatSlideToggleModule],
})
export class ProjectDetailComponent {
  project = input<IProject | null>(null);

  previousState(): void {
    window.history.back();
  }
}
