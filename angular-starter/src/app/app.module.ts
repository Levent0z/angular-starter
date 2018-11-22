// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG imports
import { AccordionModule } from 'primeng/accordion'; // <p-accordion><p-accordionTab>
import { AutoCompleteModule } from 'primeng/autocomplete'; // <p-autoComplete>
import { BlockUIModule } from 'primeng/blockui'; // <p-blockUI>
import { BreadcrumbModule } from 'primeng/breadcrumb'; // <p-breadcrumb>
import { ButtonModule } from 'primeng/button'; // <button pButton (click)=""> or <p-button (onClick)="">
import { CalendarModule } from 'primeng/calendar';  // <p-calendar>
import { CaptchaModule } from 'primeng/captcha'; //  <p-captcha> // Needs script
import { CardModule } from 'primeng/card'; // <p-card><p-header/><p-footer/>
import { CarouselModule } from 'primeng/carousel'; // <p-carousel>
import { ChartModule } from 'primeng/chart'; // <p-chart type="">
import { CheckboxModule } from 'primeng/checkbox'; // <p-checkbox>
import { ChipsModule } from 'primeng/chips'; // <p-chips>
import { CodeHighlighterModule } from 'primeng/codehighlighter'; // <pre><code class="" pCode>
import { ColorPickerModule } from 'primeng/colorpicker'; // <p-colorPicker>
import { ConfirmDialogModule } from 'primeng/confirmdialog'; // <p-confirmDialog>
import { ConfirmationService } from 'primeng/api';
import { ContextMenuModule } from 'primeng/contextmenu'; // <p-contextMenu>
import { DataScrollerModule } from 'primeng/datascroller'; // <p-dataScroller>
import { DataViewModule } from 'primeng/dataview'; // <p-dataView>
import { DeferModule } from 'primeng/defer'; // <div pDefer><ng-template>
import { DialogModule } from 'primeng/dialog'; // <p-dialog>
import { DragDropModule } from 'primeng/dragdrop'; // <div pDraggable="" dragHandle="">
import { DropdownModule } from 'primeng/dropdown'; // <p-drowdown>
import { EditorModule } from 'primeng/editor'; // <p-editor> Based on Quill
import { FieldsetModule } from 'primeng/fieldset'; // <p-fieldset>
import { FileUploadModule } from 'primeng/fileupload'; // <p-fileUpload>
// FlexGrid: Uses PrimeFlex
// import { FullCalendarModule } from 'primeng/fullcalendar'; // <p-fullCalendar> PrimeNG v7+. Needs dependency
import { GalleriaModule } from 'primeng/galleria'; // <p-galleria>
import { GMapModule } from 'primeng/gmap'; // <p-gmap>
import { GrowlModule } from 'primeng/growl'; // <p-growl>
import { InplaceModule } from 'primeng/inplace'; // <p-inplace>
import { InputMaskModule } from 'primeng/inputmask'; // <p-inputMask>
import { InputSwitchModule } from 'primeng/inputswitch'; // <p-inputSwitch>
import { InputTextareaModule } from 'primeng/inputtextarea'; // <textarea pInputTextarea>
import { InputTextModule } from 'primeng/inputtext'; // <input type="text" pInputText />
import { KeyFilterModule } from 'primeng/keyfilter'; // <input pKeyFilter="">
import { LightboxModule } from 'primeng/lightbox'; // <p-lightbox>
import { ListboxModule } from 'primeng/listbox'; // <p-listbox>
import { MegaMenuModule } from 'primeng/megamenu'; // <p-megaMenu>
import { MenubarModule } from 'primeng/menubar'; // <p-menubar>
import { MenuModule } from 'primeng/menu'; // <p-menu>
import { MessageModule } from 'primeng/message'; // <p-message>
import { MessagesModule } from 'primeng/messages'; // <p-messages>
import { MessageService } from 'primeng/api'; // Alternative to p-messages
import { MultiSelectModule } from 'primeng/multiselect'; // <p-multiSelect>
import { OrderListModule } from 'primeng/orderlist'; // <p-orderList>
import { OrganizationChartModule } from 'primeng/organizationchart'; // <p-organizationChart>
import { OverlayPanelModule } from 'primeng/overlaypanel'; // <p-overlayPanel>
import { PaginatorModule } from 'primeng/paginator'; // <p-paginator>
import { PanelMenuModule } from 'primeng/panelmenu'; // <p-panelMenu>
import { PanelModule } from 'primeng/panel'; // <p-panel>
import { PasswordModule } from 'primeng/password'; // <input type="password" pPassword/>
import { PickListModule } from 'primeng/picklist'; // <p-pickList>
import { ProgressSpinnerModule } from 'primeng/progressspinner'; // <p-progressSpinner>
import { RadioButtonModule } from 'primeng/radiobutton'; // <p-radioButton>
import { RatingModule } from 'primeng/rating'; // <p-rating>
import { ScrollPanelModule } from 'primeng/scrollpanel'; // <p-scrollPanel>
import { SidebarModule } from 'primeng/sidebar'; // <p-sidebar>
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider'; // <p-slider>
import { SpinnerModule } from 'primeng/spinner'; // <p-spinner>
import { SplitButtonModule } from 'primeng/splitbutton'; // <p-splitButton>
import { StepsModule } from 'primeng/steps'; // <p-steps>
import { TableModule } from 'primeng/table'; // <p-table>
import { TabMenuModule } from 'primeng/tabmenu'; // <p-tabMenu>
import { TabViewModule } from 'primeng/tabview'; // <p-tabView><p-tabPanel>
import { TerminalModule } from 'primeng/terminal'; // <p-terminal>
import { TieredMenuModule } from 'primeng/tieredmenu'; // <p-tieredMenu>
import { ToastModule } from 'primeng/toast'; // <p-toast>
import { ToggleButtonModule } from 'primeng/togglebutton'; // <p-toggleButton>
import { ToolbarModule } from 'primeng/toolbar'; // <p-toolbar><div class="ui-toolbar-group-left">
import { TooltipModule } from 'primeng/tooltip'; // <input type="text" pTooltip="">
import { TreeModule } from 'primeng/tree'; // <p-tree>
import { TreeTableModule } from 'primeng/treetable'; // <p-treeTable>
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox'; // <p-triStateCheckbox>

// For reference:
// import { ConfirmationService } from 'primeng/api'; // Import as type, used with ConfirmDialog
// import { MenuItem } from 'primeng/api'; // Import as type, used with breadcrumb, contextMenu, menu, menubar, panelMenu, slideMenu, tieredMenu
// import { Message } from 'primeng/api'; // Import as type, for use with the MessageService
// import { MessageService } from 'primeng/api'; // Alternative to the component approach
// import { TreeNode } from 'primeng/api'; // Import as type

// Own Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListOfLinksComponent } from './list-of-links/list-of-links.component';

@NgModule({
    declarations: [
        AppComponent,
        ListOfLinksComponent
    ],
    imports: [
        // Angular modules
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,

        // PrimeNG modules
        AccordionModule,
        AutoCompleteModule,
        BlockUIModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CaptchaModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ColorPickerModule,
        ConfirmDialogModule,
        ContextMenuModule,
        DataScrollerModule,
        DataViewModule,
        DeferModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
//        FullCalendarModule,
        GalleriaModule,
        GMapModule,
        GrowlModule,
        InplaceModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextareaModule,
        InputTextModule,
        KeyFilterModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenubarModule,
        MenuModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelMenuModule,
        PanelModule,
        PasswordModule,
        PickListModule,
        ProgressSpinnerModule,
        RadioButtonModule,
        RatingModule,
        ScrollPanelModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        TriStateCheckboxModule,

        // Own Modules
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
