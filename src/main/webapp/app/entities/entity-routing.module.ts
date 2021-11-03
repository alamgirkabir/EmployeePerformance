import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'performance-criteria',
        data: { pageTitle: 'performanceApp.performanceCriteria.home.title' },
        loadChildren: () => import('./performance-criteria/performance-criteria.module').then(m => m.PerformanceCriteriaModule),
      },
      {
        path: 'performance-base-score',
        data: { pageTitle: 'performanceApp.performanceBaseScore.home.title' },
        loadChildren: () => import('./performance-base-score/performance-base-score.module').then(m => m.PerformanceBaseScoreModule),
      },
      {
        path: 'business-development-team',
        data: { pageTitle: 'performanceApp.businessDevelopmentTeam.home.title' },
        loadChildren: () =>
          import('./business-development-team/business-development-team.module').then(m => m.BusinessDevelopmentTeamModule),
      },
      {
        path: 'team-member',
        data: { pageTitle: 'performanceApp.teamMember.home.title' },
        loadChildren: () => import('./team-member/team-member.module').then(m => m.TeamMemberModule),
      },
      {
        path: 'performance-score',
        data: { pageTitle: 'performanceApp.performanceScore.home.title' },
        loadChildren: () => import('./performance-score/performance-score.module').then(m => m.PerformanceScoreModule),
      },
      {
        path: 'sprint',
        data: { pageTitle: 'performanceApp.sprint.home.title' },
        loadChildren: () => import('./sprint/sprint.module').then(m => m.SprintModule),
      },
      {
        path: 'sprint-item',
        data: { pageTitle: 'performanceApp.sprintItem.home.title' },
        loadChildren: () => import('./sprint-item/sprint-item.module').then(m => m.SprintItemModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
