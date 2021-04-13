/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:17.24
*/
gx.evt.autoSkip = false;
gx.define('tusuariodb', false, function () {
   this.ServerClass =  "tusuariodb" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Usuariodbid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuariodbid",["gx.O.A9920UsuarioDBId", "gx.O.A9933UsuarioDBOid"],["A9933UsuarioDBOid", "Gx_mode", "Z9920UsuarioDBId", "Z9933UsuarioDBOid", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11eh743_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12eh743_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKUSUARIODBID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariodbid,isvalid:null,rgrid:[],fld:"USUARIODBID",gxz:"Z9920UsuarioDBId",gxold:"O9920UsuarioDBId",gxvar:"A9920UsuarioDBId",ucs:[],op:[44],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9920UsuarioDBId=Value},v2z:function(Value){gx.O.Z9920UsuarioDBId=Value},v2c:function(){gx.fn.setControlValue("USUARIODBID",gx.O.A9920UsuarioDBId,0)},c2v:function(){gx.O.A9920UsuarioDBId=this.val()},val:function(){return gx.fn.getControlValue("USUARIODBID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKUSUARIODBOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIODBOID",gxz:"Z9933UsuarioDBOid",gxold:"O9933UsuarioDBOid",gxvar:"A9933UsuarioDBOid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9933UsuarioDBOid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9933UsuarioDBOid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIODBOID",gx.O.A9933UsuarioDBOid,0)},c2v:function(){gx.O.A9933UsuarioDBOid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIODBOID",'.')},nac:gx.falseFn};
   this.A9920UsuarioDBId = "" ;
   this.Z9920UsuarioDBId = "" ;
   this.O9920UsuarioDBId = "" ;
   this.A9933UsuarioDBOid = 0 ;
   this.Z9933UsuarioDBOid = 0 ;
   this.O9933UsuarioDBOid = 0 ;
   this.A9920UsuarioDBId = "" ;
   this.A9933UsuarioDBOid = 0 ;
   this.Events = {"e11eh743_client": ["ENTER", true] ,"e12eh743_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tusuariodb());
