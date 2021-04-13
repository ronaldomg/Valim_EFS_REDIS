/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:53:5.88
*/
gx.evt.autoSkip = false;
gx.define('hmodalitensequipamentocliente', false, function () {
   this.ServerClass =  "hmodalitensequipamentocliente" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV19AparelhoItemEmpresaId=gx.fn.getControlValue("vAPARELHOITEMEMPRESAID") ;
      this.AV12AparelhoId=gx.fn.getIntegerValue("vAPARELHOID",'.') ;
      this.A9705AparelhoClienteItemApId=gx.fn.getIntegerValue("APARELHOCLIENTEITEMAPID",'.') ;
      this.A9706AparelhoClienteItemApEmpId=gx.fn.getControlValue("APARELHOCLIENTEITEMAPEMPID") ;
      this.AV13AparelhoEmpresaId=gx.fn.getControlValue("vAPARELHOEMPRESAID") ;
      this.A9709AparelhoClienteItemApCliSeqId=gx.fn.getIntegerValue("APARELHOCLIENTEITEMAPCLISEQID",'.') ;
      this.AV5AparelhoClienteSeqId=gx.fn.getIntegerValue("vAPARELHOCLIENTESEQID",'.') ;
      this.A9710AparelhoClienteItemPessoaId=gx.fn.getIntegerValue("APARELHOCLIENTEITEMPESSOAID",'.') ;
      this.AV14PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.A9711AparelhoClienteItemPessoaEmpId=gx.fn.getControlValue("APARELHOCLIENTEITEMPESSOAEMPID") ;
      this.AV15PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
      this.A9707AparelhoClienteItemItemId=gx.fn.getIntegerValue("APARELHOCLIENTEITEMITEMID",'.') ;
      this.A9708AparelhoClienteItemEmpId=gx.fn.getControlValue("APARELHOCLIENTEITEMEMPID") ;
      this.A9715AparelhoClienteItemPrazoMan=gx.fn.getIntegerValue("APARELHOCLIENTEITEMPRAZOMAN",'.') ;
      this.A9716AparelhoClienteItemContVisita=gx.fn.getControlValue("APARELHOCLIENTEITEMCONTVISITA") ;
      this.AV17Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Aparelhoitemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAPARELHOITEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e171zs2_client=function()
   {
      this.executeServerEvent("VAPARELHOCLIENTEITEMCONTVISITA.CLICK", true, arguments[0], false, false);
   };
   this.e111zs2_client=function()
   {
      this.executeServerEvent("'PRIMEIRA'", true, null, false, false);
   };
   this.e121zs2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e131zs2_client=function()
   {
      this.executeServerEvent("'PROXIMA'", true, null, false, false);
   };
   this.e141zs2_client=function()
   {
      this.executeServerEvent("'ULTIMA'", true, null, false, false);
   };
   this.e201zs2_client=function()
   {
      this.executeServerEvent("'ALTERARITEMCLIENTE'", true, arguments[0], false, false);
   };
   this.e151zs2_client=function()
   {
      this.executeServerEvent("'ADICIONAR'", true, null, false, false);
   };
   this.e211zs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e221zs1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,10,11,12,13,14,20,23,26,28,30,32];
   this.GXLastCtrlId =32;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalitensequipamentocliente",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Aparelhoitemid",6,"vAPARELHOITEMID","Código do Item","","AparelhoItemId","int",0,"px",4,4,"right",null,[],"Aparelhoitemid","AparelhoItemId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8880,7,"APARELHOITEMID","Código do Item","","AparelhoItemId","int",0,"px",4,4,"right",null,[],8880,"AparelhoItemId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8876,8,"APARELHOITEMDESCRICAO","Descrição","","AparelhoItemDescricao","svchar",0,"px",30,30,"left",null,[],8876,"AparelhoItemDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9714,9,"APARELHOITEMPRAZOMANUTENCAO","Prazo Padão","","AparelhoItemPrazoManutencao","int",0,"px",4,4,"right",null,[],9714,"AparelhoItemPrazoManutencao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox("Aparelhoclienteitemcontvisita",10,"vAPARELHOCLIENTEITEMCONTVISITA","Cont Visita","AparelhoClienteItemContVisita","char","e171zs2_client",1,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Aparelhoclienteitemitemid",11,"vAPARELHOCLIENTEITEMITEMID","Aparelho Cliente Item Item Id","","AparelhoClienteItemItemId","int",0,"px",4,4,"right",null,[],"Aparelhoclienteitemitemid","AparelhoClienteItemItemId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Editmode",12,"vEDITMODE","Edit Mode","","EditMode","char",0,"px",3,3,"left",null,[],"Editmode","EditMode",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Aparelhoclienteitemprazoman",13,"vAPARELHOCLIENTEITEMPRAZOMAN","Prazo Cliente","","AparelhoClienteItemPrazoMan","int",0,"px",4,4,"right",null,[],"Aparelhoclienteitemprazoman","AparelhoClienteItemPrazoMan",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpeditar","vBMPEDITAR",14,16,"px",16,"px","e201zs2_client","","","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:this.Validv_Aparelhoitemid,isvalid:null,rgrid:[],fld:"vAPARELHOITEMID",gxz:"ZV18AparelhoItemId",gxold:"OV18AparelhoItemId",gxvar:"AV18AparelhoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18AparelhoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AparelhoItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPARELHOITEMID",row || gx.fn.currentGridRowImpl(5),gx.O.AV18AparelhoItemId,0)},c2v:function(){gx.O.AV18AparelhoItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vAPARELHOITEMID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMID",gxz:"Z8880AparelhoItemId",gxold:"O8880AparelhoItemId",gxvar:"A8880AparelhoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8880AparelhoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8880AparelhoItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMID",row || gx.fn.currentGridRowImpl(5),gx.O.A8880AparelhoItemId,0)},c2v:function(){gx.O.A8880AparelhoItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOITEMID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMDESCRICAO",gxz:"Z8876AparelhoItemDescricao",gxold:"O8876AparelhoItemDescricao",gxvar:"A8876AparelhoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8876AparelhoItemDescricao=Value},v2z:function(Value){gx.O.Z8876AparelhoItemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A8876AparelhoItemDescricao,0)},c2v:function(){gx.O.A8876AparelhoItemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMPRAZOMANUTENCAO",gxz:"Z9714AparelhoItemPrazoManutencao",gxold:"O9714AparelhoItemPrazoManutencao",gxvar:"A9714AparelhoItemPrazoManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9714AparelhoItemPrazoManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9714AparelhoItemPrazoManutencao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMPRAZOMANUTENCAO",row || gx.fn.currentGridRowImpl(5),gx.O.A9714AparelhoItemPrazoManutencao,0)},c2v:function(){gx.O.A9714AparelhoItemPrazoManutencao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOITEMPRAZOMANUTENCAO",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCLIENTEITEMCONTVISITA",gxz:"ZV11AparelhoClienteItemContVisita",gxold:"OV11AparelhoClienteItemContVisita",gxvar:"AV11AparelhoClienteItemContVisita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV11AparelhoClienteItemContVisita=Value},v2z:function(Value){gx.O.ZV11AparelhoClienteItemContVisita=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vAPARELHOCLIENTEITEMCONTVISITA",row || gx.fn.currentGridRowImpl(5),gx.O.AV11AparelhoClienteItemContVisita)},c2v:function(){gx.O.AV11AparelhoClienteItemContVisita=this.val()},val:function(row){return gx.fn.getGridControlValue("vAPARELHOCLIENTEITEMCONTVISITA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCLIENTEITEMITEMID",gxz:"ZV10AparelhoClienteItemItemId",gxold:"OV10AparelhoClienteItemItemId",gxvar:"AV10AparelhoClienteItemItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10AparelhoClienteItemItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10AparelhoClienteItemItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPARELHOCLIENTEITEMITEMID",row || gx.fn.currentGridRowImpl(5),gx.O.AV10AparelhoClienteItemItemId,0)},c2v:function(){gx.O.AV10AparelhoClienteItemItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vAPARELHOCLIENTEITEMITEMID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEDITMODE",gxz:"ZV9EditMode",gxold:"OV9EditMode",gxvar:"AV9EditMode",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV9EditMode=Value},v2z:function(Value){gx.O.ZV9EditMode=Value},v2c:function(row){gx.fn.setGridControlValue("vEDITMODE",row || gx.fn.currentGridRowImpl(5),gx.O.AV9EditMode,0)},c2v:function(){gx.O.AV9EditMode=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDITMODE",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCLIENTEITEMPRAZOMAN",gxz:"ZV8AparelhoClienteItemPrazoMan",gxold:"OV8AparelhoClienteItemPrazoMan",gxvar:"AV8AparelhoClienteItemPrazoMan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8AparelhoClienteItemPrazoMan=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8AparelhoClienteItemPrazoMan=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPARELHOCLIENTEITEMPRAZOMAN",row || gx.fn.currentGridRowImpl(5),gx.O.AV8AparelhoClienteItemPrazoMan,0)},c2v:function(){gx.O.AV8AparelhoClienteItemPrazoMan=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vAPARELHOCLIENTEITEMPRAZOMAN",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEDITAR",gxz:"ZV7BmpEditar",gxold:"OV7BmpEditar",gxvar:"AV7BmpEditar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BmpEditar=Value},v2z:function(Value){gx.O.ZV7BmpEditar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEDITAR",row || gx.fn.currentGridRowImpl(5),gx.O.AV7BmpEditar,gx.O.AV23Bmpeditar_GXI)},c2v:function(){gx.O.AV23Bmpeditar_GXI=this.val_GXI();gx.O.AV7BmpEditar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEDITAR",row || gx.fn.currentGridRowImpl(5))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEDITAR_GXI",row || gx.fn.currentGridRowImpl(5))}, gxvar_GXI:'AV23Bmpeditar_GXI',nac:gx.falseFn};
   GXValidFnc[20]={fld:"TABLENAV",grid:0};
   GXValidFnc[23]={fld:"BTNINCLUIR",grid:0};
   GXValidFnc[26]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[28]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[30]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[32]={fld:"BTNULTIMO",grid:0};
   this.ZV18AparelhoItemId = 0 ;
   this.OV18AparelhoItemId = 0 ;
   this.Z8880AparelhoItemId = 0 ;
   this.O8880AparelhoItemId = 0 ;
   this.Z8876AparelhoItemDescricao = "" ;
   this.O8876AparelhoItemDescricao = "" ;
   this.Z9714AparelhoItemPrazoManutencao = 0 ;
   this.O9714AparelhoItemPrazoManutencao = 0 ;
   this.ZV11AparelhoClienteItemContVisita = "" ;
   this.OV11AparelhoClienteItemContVisita = "" ;
   this.ZV10AparelhoClienteItemItemId = 0 ;
   this.OV10AparelhoClienteItemItemId = 0 ;
   this.ZV9EditMode = "" ;
   this.OV9EditMode = "" ;
   this.ZV8AparelhoClienteItemPrazoMan = 0 ;
   this.OV8AparelhoClienteItemPrazoMan = 0 ;
   this.ZV7BmpEditar = "" ;
   this.OV7BmpEditar = "" ;
   this.AV5AparelhoClienteSeqId = 0 ;
   this.AV12AparelhoId = 0 ;
   this.AV14PessoaId = 0 ;
   this.AV17Modo = "" ;
   this.A8879AparelhoItemEmpresaId = "" ;
   this.A8825AparelhoId = 0 ;
   this.AV18AparelhoItemId = 0 ;
   this.A8880AparelhoItemId = 0 ;
   this.A8876AparelhoItemDescricao = "" ;
   this.A9714AparelhoItemPrazoManutencao = 0 ;
   this.AV11AparelhoClienteItemContVisita = "" ;
   this.AV10AparelhoClienteItemItemId = 0 ;
   this.AV9EditMode = "" ;
   this.AV8AparelhoClienteItemPrazoMan = 0 ;
   this.AV7BmpEditar = "" ;
   this.A9708AparelhoClienteItemEmpId = "" ;
   this.A9707AparelhoClienteItemItemId = 0 ;
   this.A9711AparelhoClienteItemPessoaEmpId = "" ;
   this.A9710AparelhoClienteItemPessoaId = 0 ;
   this.A9709AparelhoClienteItemApCliSeqId = 0 ;
   this.A9706AparelhoClienteItemApEmpId = "" ;
   this.A9705AparelhoClienteItemApId = 0 ;
   this.A9715AparelhoClienteItemPrazoMan = 0 ;
   this.A9716AparelhoClienteItemContVisita = "" ;
   this.AV19AparelhoItemEmpresaId = "" ;
   this.AV13AparelhoEmpresaId = "" ;
   this.AV15PessoaEmpresaId = "" ;
   this.Events = {"e171zs2_client": ["VAPARELHOCLIENTEITEMCONTVISITA.CLICK", true] ,"e111zs2_client": ["'PRIMEIRA'", true] ,"e121zs2_client": ["'ANTERIOR'", true] ,"e131zs2_client": ["'PROXIMA'", true] ,"e141zs2_client": ["'ULTIMA'", true] ,"e201zs2_client": ["'ALTERARITEMCLIENTE'", true] ,"e151zs2_client": ["'ADICIONAR'", true] ,"e211zs2_client": ["ENTER", true] ,"e221zs1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEDITAR","Visible")',ctrl:'vBMPEDITAR',prop:'Visible'},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true}],[]];
   this.EvtParms["VAPARELHOCLIENTEITEMCONTVISITA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEDITAR","Visible")',ctrl:'vBMPEDITAR',prop:'Visible'},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true},{av:'AV8AparelhoClienteItemPrazoMan',fld:'vAPARELHOCLIENTEITEMPRAZOMAN'},{av:'AV9EditMode',fld:'vEDITMODE'},{av:'AV11AparelhoClienteItemContVisita',fld:'vAPARELHOCLIENTEITEMCONTVISITA'}],[{av:'AV9EditMode',fld:'vEDITMODE'},{av:'AV11AparelhoClienteItemContVisita',fld:'vAPARELHOCLIENTEITEMCONTVISITA'},{av:'AV8AparelhoClienteItemPrazoMan',fld:'vAPARELHOCLIENTEITEMPRAZOMAN'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true}],[{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV22GXLvl63',fld:'vGXLVL63'},{av:'AV10AparelhoClienteItemItemId',fld:'vAPARELHOCLIENTEITEMITEMID'},{av:'AV8AparelhoClienteItemPrazoMan',fld:'vAPARELHOCLIENTEITEMPRAZOMAN'},{av:'AV11AparelhoClienteItemContVisita',fld:'vAPARELHOCLIENTEITEMCONTVISITA'},{av:'gx.fn.getCtrlProperty("vAPARELHOCLIENTEITEMPRAZOMAN","Enabled")',ctrl:'vAPARELHOCLIENTEITEMPRAZOMAN',prop:'Enabled'},{ctrl:'vAPARELHOCLIENTEITEMCONTVISITA'},{av:'AV9EditMode',fld:'vEDITMODE'},{av:'AV7BmpEditar',fld:'vBMPEDITAR'},{ctrl:'vBMPEDITAR',prop:'Alternatetext'}]];
   this.EvtParms["GRID.REFRESH"] = [[],[{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'PRIMEIRA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEDITAR","Visible")',ctrl:'vBMPEDITAR',prop:'Visible'},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEDITAR","Visible")',ctrl:'vBMPEDITAR',prop:'Visible'},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true}],[]];
   this.EvtParms["'PROXIMA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEDITAR","Visible")',ctrl:'vBMPEDITAR',prop:'Visible'},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true}],[]];
   this.EvtParms["'ULTIMA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEDITAR","Visible")',ctrl:'vBMPEDITAR',prop:'Visible'},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true}],[]];
   this.EvtParms["'ALTERARITEMCLIENTE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEDITAR","Visible")',ctrl:'vBMPEDITAR',prop:'Visible'},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true},{av:'AV8AparelhoClienteItemPrazoMan',fld:'vAPARELHOCLIENTEITEMPRAZOMAN'},{av:'AV9EditMode',fld:'vEDITMODE'},{av:'AV11AparelhoClienteItemContVisita',fld:'vAPARELHOCLIENTEITEMCONTVISITA'}],[{av:'AV9EditMode',fld:'vEDITMODE'},{av:'AV11AparelhoClienteItemContVisita',fld:'vAPARELHOCLIENTEITEMCONTVISITA'},{av:'AV8AparelhoClienteItemPrazoMan',fld:'vAPARELHOCLIENTEITEMPRAZOMAN'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true}]];
   this.EvtParms["'ADICIONAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEDITAR","Visible")',ctrl:'vBMPEDITAR',prop:'Visible'},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID'},{av:'A9706AparelhoClienteItemApEmpId',fld:'APARELHOCLIENTEITEMAPEMPID'},{av:'AV13AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'A9711AparelhoClienteItemPessoaEmpId',fld:'APARELHOCLIENTEITEMPESSOAEMPID'},{av:'AV15PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'AV18AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'A9708AparelhoClienteItemEmpId',fld:'APARELHOCLIENTEITEMEMPID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'A9716AparelhoClienteItemContVisita',fld:'APARELHOCLIENTEITEMCONTVISITA'},{av:'AV17Modo',fld:'vMODO',hsh:true},{av:'AV16AparelhoDescricao',fld:'vAPARELHODESCRICAO'}],[]];
   this.setVCMap("AV19AparelhoItemEmpresaId", "vAPARELHOITEMEMPRESAID", 0, "char");
   this.setVCMap("AV12AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("A9705AparelhoClienteItemApId", "APARELHOCLIENTEITEMAPID", 0, "int");
   this.setVCMap("A9706AparelhoClienteItemApEmpId", "APARELHOCLIENTEITEMAPEMPID", 0, "char");
   this.setVCMap("AV13AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("A9709AparelhoClienteItemApCliSeqId", "APARELHOCLIENTEITEMAPCLISEQID", 0, "int");
   this.setVCMap("AV5AparelhoClienteSeqId", "vAPARELHOCLIENTESEQID", 0, "int");
   this.setVCMap("A9710AparelhoClienteItemPessoaId", "APARELHOCLIENTEITEMPESSOAID", 0, "int");
   this.setVCMap("AV14PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("A9711AparelhoClienteItemPessoaEmpId", "APARELHOCLIENTEITEMPESSOAEMPID", 0, "char");
   this.setVCMap("AV15PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A9707AparelhoClienteItemItemId", "APARELHOCLIENTEITEMITEMID", 0, "int");
   this.setVCMap("A9708AparelhoClienteItemEmpId", "APARELHOCLIENTEITEMEMPID", 0, "char");
   this.setVCMap("A9715AparelhoClienteItemPrazoMan", "APARELHOCLIENTEITEMPRAZOMAN", 0, "int");
   this.setVCMap("A9716AparelhoClienteItemContVisita", "APARELHOCLIENTEITEMCONTVISITA", 0, "char");
   this.setVCMap("AV17Modo", "vMODO", 0, "char");
   this.setVCMap("AV19AparelhoItemEmpresaId", "vAPARELHOITEMEMPRESAID", 0, "char");
   this.setVCMap("AV12AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("A9705AparelhoClienteItemApId", "APARELHOCLIENTEITEMAPID", 0, "int");
   this.setVCMap("A9706AparelhoClienteItemApEmpId", "APARELHOCLIENTEITEMAPEMPID", 0, "char");
   this.setVCMap("AV13AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("A9709AparelhoClienteItemApCliSeqId", "APARELHOCLIENTEITEMAPCLISEQID", 0, "int");
   this.setVCMap("AV5AparelhoClienteSeqId", "vAPARELHOCLIENTESEQID", 0, "int");
   this.setVCMap("A9710AparelhoClienteItemPessoaId", "APARELHOCLIENTEITEMPESSOAID", 0, "int");
   this.setVCMap("AV14PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("A9711AparelhoClienteItemPessoaEmpId", "APARELHOCLIENTEITEMPESSOAEMPID", 0, "char");
   this.setVCMap("AV15PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A9707AparelhoClienteItemItemId", "APARELHOCLIENTEITEMITEMID", 0, "int");
   this.setVCMap("A9708AparelhoClienteItemEmpId", "APARELHOCLIENTEITEMEMPID", 0, "char");
   this.setVCMap("A9715AparelhoClienteItemPrazoMan", "APARELHOCLIENTEITEMPRAZOMAN", 0, "int");
   this.setVCMap("A9716AparelhoClienteItemContVisita", "APARELHOCLIENTEITEMCONTVISITA", 0, "char");
   this.setVCMap("AV17Modo", "vMODO", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV19AparelhoItemEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV12AparelhoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7BmpEditar", rfrProp:"Visible", gxAttId:"Bmpeditar"});
   GridContainer.addRefreshingVar({rfrVar:"A8880AparelhoItemId", rfrProp:"Value", gxAttId:"8880"});
   GridContainer.addRefreshingVar({rfrVar:"A9705AparelhoClienteItemApId"});
   GridContainer.addRefreshingVar({rfrVar:"A9706AparelhoClienteItemApEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"AV13AparelhoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A9709AparelhoClienteItemApCliSeqId"});
   GridContainer.addRefreshingVar({rfrVar:"AV5AparelhoClienteSeqId"});
   GridContainer.addRefreshingVar({rfrVar:"A9710AparelhoClienteItemPessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV14PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A9711AparelhoClienteItemPessoaEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"AV15PessoaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A9707AparelhoClienteItemItemId"});
   GridContainer.addRefreshingVar({rfrVar:"AV18AparelhoItemId", rfrProp:"Value", gxAttId:"Aparelhoitemid"});
   GridContainer.addRefreshingVar({rfrVar:"A9708AparelhoClienteItemEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A9715AparelhoClienteItemPrazoMan"});
   GridContainer.addRefreshingVar({rfrVar:"A9716AparelhoClienteItemContVisita"});
   GridContainer.addRefreshingVar({rfrVar:"AV17Modo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalitensequipamentocliente());
