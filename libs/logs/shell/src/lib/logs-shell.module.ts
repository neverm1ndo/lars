import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { logsShellRoutes } from './lib.routes';

@NgModule({
  imports: [RouterModule.forChild(logsShellRoutes)]
})
export class LogsShellModule {}
