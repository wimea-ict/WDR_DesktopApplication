import { Component, OnDestroy, Inject, OnInit, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OCnavItems, ManagernavItems, SeniorZonalofficernavItems, ManagerStationNetworksnavItems, WeatherAnalystnavItems, WeatherForecasternavItems, ObservernavItems, DataOfficernavItems} from '../../_nav';
import { TokenStorageService } from '../../services/allServices';
import { BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';



@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public OCnavItems = OCnavItems;
  public ManagernavItems = ManagernavItems;
  public SeniorZonalofficernavItems = SeniorZonalofficernavItems;
  public ManagerStationNetworksnavItems = ManagerStationNetworksnavItems;
  public WeatherAnalystnavItems = WeatherAnalystnavItems;
  public WeatherForecasternavItems = WeatherForecasternavItems;
  public ObservernavItems = ObservernavItems;
  public DataOfficernavItems = DataOfficernavItems;

  user: User[] = [];
  info: any;
  returnUrl = '';

  public roles: string[];
  public authority: string;

  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(
    private token: TokenStorageService,
    private router : Router,
    private breakpointObserver: BreakpointObserver,
    private tokenStorage: TokenStorageService,
    @Inject(DOCUMENT) _document?: any
    ) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit() {
    if ( this.tokenStorage.getToken()) {
    this.roles =  this.tokenStorage.getAuthorities();
    this.roles.every(role => {
      if ( role === 'ROLE_MANAGER DATA') {
        this.authority = 'Manager Data';
        return false;
      } else if ( role === 'ROLE_OC') {
        this.authority = 'OC';
        return false;
      }
      else if ( role === 'ROLE_ZONAL OFFICER') {
        this.authority = 'Zonal Officer';
        return false;
      }
      else if ( role === 'ROLE_DATA OFFICER') {
        this.authority = 'Data Officer';
        return false;
      }
      else if ( role === 'ROLE_SENIOR DATA OFFICER') {
        this.authority = 'Senior Data Officer';
        return false;
      }
      else if ( role === 'ROLE_WEATHER FORECASTER') {
        this.authority = 'Weather Forecaster';
        return false;
      }
      else if ( role === 'ROLE_SENIOR ZONAL OFFICER') {
        this.authority = 'Senior Zonal Officer';
        return false;
      }
      else if ( role === 'ROLE_WEATHER ANALYST') {
        this.authority = 'Weather Analyst';
        return false;
      }
      else if ( role === 'ROLE_MANAGER STATION NETWORKS') {
        this.authority = 'Manager Station Networks';
        return false;
      }
      else if ( role === 'ROLE_OBSERVER ARCHIVE') {
        this.authority = 'Observer Archive';
        return false;
      } else
      this.authority = 'Observer';
      return true;
    })
  }
}

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  public logout() {
    this.token.signOut();
    this.router.navigate(['/login']);
  }
  public profile() {
    this.router.navigate(['/profile']);
  }
}
